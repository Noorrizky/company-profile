<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Exceptions\ThrottleRequestsException; // 1. Tambahkan import ini
use Illuminate\Http\Request; // 2. Tambahkan import ini

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->trustProxies(at: '*');
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {

        // --- TAMBAHKAN BLOK INI ---
        // Menangkap error "Too Many Requests" dari middleware throttle
        $exceptions->render(function (ThrottleRequestsException $e, Request $request) {
            // Pastikan ini adalah request dari Inertia (React Frontend)
            if ($request->header('X-Inertia')) {
                // Kembalikan ke halaman sebelumnya dengan pesan error buatan kita
                // Kita letakkan errornya di kolom 'message' agar muncul di bawah textarea
                return back()->withErrors([
                    'message' => 'Anda mengirim pesan terlalu cepat. Silakan tunggu sekitar 1 menit sebelum mengirim lagi.'
                ]);
            }
        });
        // --------------------------

    })->create();
