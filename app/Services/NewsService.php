<?php

namespace App\Services;

use App\Models\News;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Str; // Tambahkan import ini
use Illuminate\Http\UploadedFile; // Tambahkan import ini
class NewsService
{
    /**
     * Mengambil daftar berita untuk publik (Landing Page)
     */
    public function getPublishedNews(int $perPage = 6): LengthAwarePaginator
    {
        return News::where('is_published', true)
            ->orderBy('published_at', 'desc')
            ->paginate($perPage);
    }
    public function createNews(array $data, ?UploadedFile $imageFile): News
    {
        // 1. Buat slug otomatis dari judul (tambahkan timestamp agar unik)
        $data['slug'] = Str::slug($data['title']) . '-' . time();

        // 2. Tangani upload gambar jika ada
        if ($imageFile) {
            // Simpan ke storage/app/public/news_images
            $data['image_path'] = $imageFile->store('news_images', 'public');
        }

        // 3. Jika is_published bernilai true, isi published_at dengan waktu saat ini
        if (!empty($data['is_published'])) {
            $data['published_at'] = now();
        }
        // ---------------------------

        // 4. Simpan ke database
        return News::create($data);
        }

        public function getNewsBySlug(string $slug): News
        {
            return News::where('slug', $slug)
                ->where('is_published', true)
                ->firstOrFail(); // Akan otomatis melempar error 404 jika tidak ditemukan
        }
    public function getAllNewsPaginated(int $perPage = 10): LengthAwarePaginator
        {
            return News::latest()->paginate($perPage);
        }
    // Nanti kamu bisa tambahkan metode createNews() di sini
    // yang menangani upload gambar, pembuatan slug, dll untuk kebutuhan Admin Panel.
    public function updateNews(News $news, array $data, ?UploadedFile $imageFile): News
    {
        // Update slug jika judul berubah
        if ($news->title !== $data['title']) {
            $data['slug'] = Str::slug($data['title']) . '-' . time();
        }

        // Tangani upload gambar baru
        if ($imageFile) {
            // Hapus gambar lama dari storage jika ada
            if ($news->image_path) {
                Storage::disk('public')->delete($news->image_path);
            }
            // Simpan gambar baru
            $data['image_path'] = $imageFile->store('news_images', 'public');
        }

        // Set waktu publish jika baru di-publish
        if (!empty($data['is_published']) && !$news->published_at) {
            $data['published_at'] = now();
        } elseif (empty($data['is_published'])) {
            $data['published_at'] = null; // Reset jika di-draft kembali
        }

        $news->update($data);
        return $news;
    }

    /**
     * Menghapus berita beserta gambar fisiknya
     */
    public function deleteNews(News $news): void
    {
        if ($news->image_path) {
            Storage::disk('public')->delete($news->image_path);
        }
        $news->delete();
    }
}