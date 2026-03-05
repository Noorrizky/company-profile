<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function about(): Response
    {
        return Inertia::render('About/Index');
    }

    public function services(): Response
    {
        return Inertia::render('Services/Index');
    }
}