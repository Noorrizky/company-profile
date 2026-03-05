<?php

namespace App\Http\Controllers;

use App\Services\PortfolioService;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function __construct(
        protected PortfolioService $portfolioService
    ) {}

    public function index(): Response
    {
        return Inertia::render('Portfolio/Index', [
            'portfolios' => $this->portfolioService->getAllPortfolios()
        ]);
    }
}
