<?php

namespace App\Http\Controllers;

use App\Services\NewsService;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    public function __construct(
        protected NewsService $newsService
    ) {}

    /**
     * Menampilkan halaman daftar berita ke Frontend (React)
     */
    public function index(): Response
    {
        $news = $this->newsService->getPublishedNews();

        // Mengirim data ke komponen React: resources/js/Pages/News/Index.jsx
        return Inertia::render('News/Index', [
            'news' => $news
        ]);
    }
    public function show(string $slug): Response
    {
        $newsItem = $this->newsService->getNewsBySlug($slug);

        return Inertia::render('News/Show', [
            'newsItem' => $newsItem
        ]);
    }
}
