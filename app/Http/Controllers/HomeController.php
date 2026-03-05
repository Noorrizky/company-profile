<?php

namespace App\Http\Controllers;

use App\Services\NewsService;
use App\Services\PortfolioService;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __construct(
        protected NewsService $newsService,
        protected PortfolioService $portfolioService
    ) {}

    public function index(): Response
    {
        return Inertia::render('Home/Index', [
            // Memanggil Service dengan parameter limit 3 data saja
            'news' => $this->newsService->getPublishedNews(3),
            'portfolios' => $this->portfolioService->getAllPortfolios(3)
        ]);
    }
}