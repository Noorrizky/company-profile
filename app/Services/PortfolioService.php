<?php

namespace App\Services;

use App\Models\Portfolio;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class PortfolioService
{
    // Method untuk halaman publik
    public function getAllPortfolios(int $perPage = 6): LengthAwarePaginator
    {
        // Ubah dari ->get() menjadi ->paginate()
        return Portfolio::latest()->paginate($perPage); 
    }

    // --- TAMBAHKAN METHOD DI BAWAH INI UNTUK ADMIN ---

    public function getAdminPortfoliosPaginated(int $perPage = 10): LengthAwarePaginator
    {
        return Portfolio::latest()->paginate($perPage);
    }

    public function createPortfolio(array $data, ?UploadedFile $imageFile): Portfolio
    {
        if ($imageFile) {
            $data['image_path'] = $imageFile->store('portfolio_images', 'public');
        }
        return Portfolio::create($data);
    }

    public function updatePortfolio(Portfolio $portfolio, array $data, ?UploadedFile $imageFile): Portfolio
    {
        if ($imageFile) {
            if ($portfolio->image_path) {
                Storage::disk('public')->delete($portfolio->image_path);
            }
            $data['image_path'] = $imageFile->store('portfolio_images', 'public');
        }
        $portfolio->update($data);
        return $portfolio;
    }

    public function deletePortfolio(Portfolio $portfolio): void
    {
        if ($portfolio->image_path) {
            Storage::disk('public')->delete($portfolio->image_path);
        }
        $portfolio->delete();
    }
}