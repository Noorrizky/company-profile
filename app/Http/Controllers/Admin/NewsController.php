<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreNewsRequest; // Import Form Request
use App\Services\NewsService;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse; // Import ini
use App\Http\Requests\Admin\UpdateNewsRequest; // Import ini
use App\Models\News; // Import ini

class NewsController extends Controller
{
    public function __construct(
        protected NewsService $newsService
    ) {}

    public function index(): Response
    {
        return Inertia::render('Admin/News/Index', [
            'news' => $this->newsService->getAllNewsPaginated()
        ]);
    }

    // --- TAMBAHKAN DUA METHOD INI ---

    public function create(): Response
    {
        return Inertia::render('Admin/News/Create');
    }

    public function store(StoreNewsRequest $request): RedirectResponse
    {
        // Panggil service untuk menyimpan data teks dan file gambar
        $this->newsService->createNews(
            $request->validated(), 
            $request->file('image')
        );

        // Redirect ke halaman index dengan pesan sukses
        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil ditambahkan!');
    }
    public function edit(News $news): Response
    {
        return Inertia::render('Admin/News/Edit', [
            'newsItem' => $news
        ]);
    }

    public function update(UpdateNewsRequest $request, News $news): RedirectResponse
    {
        $this->newsService->updateNews(
            $news, 
            $request->validated(), 
            $request->file('image')
        );

        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil diperbarui!');
    }

    public function destroy(News $news): RedirectResponse
    {
        $this->newsService->deleteNews($news);

        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil dihapus!');
    }
}
