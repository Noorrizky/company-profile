<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StorePortfolioRequest;
use App\Http\Requests\Admin\UpdatePortfolioRequest;
use App\Models\Portfolio;
use App\Services\PortfolioService;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class PortfolioController extends Controller
{
    public function __construct(
        protected PortfolioService $portfolioService
    ) {}

    public function index(): Response
    {
        return Inertia::render('Admin/Portfolio/Index', [
            'portfolios' => $this->portfolioService->getAdminPortfoliosPaginated()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Portfolio/Create');
    }

    public function store(StorePortfolioRequest $request): RedirectResponse
    {
        $this->portfolioService->createPortfolio($request->validated(), $request->file('image'));
        return redirect()->route('admin.portfolio.index')->with('success', 'Portofolio berhasil ditambahkan!');
    }

    public function edit(Portfolio $portfolio): Response
    {
        return Inertia::render('Admin/Portfolio/Edit', [
            'portfolio' => $portfolio
        ]);
    }

    public function update(UpdatePortfolioRequest $request, Portfolio $portfolio): RedirectResponse
    {
        $this->portfolioService->updatePortfolio($portfolio, $request->validated(), $request->file('image'));
        return redirect()->route('admin.portfolio.index')->with('success', 'Portofolio berhasil diperbarui!');
    }

    public function destroy(Portfolio $portfolio): RedirectResponse
    {
        $this->portfolioService->deletePortfolio($portfolio);
        return redirect()->route('admin.portfolio.index')->with('success', 'Portofolio berhasil dihapus!');
    }
}