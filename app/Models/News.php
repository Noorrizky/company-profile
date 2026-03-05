<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; // 1. Tambahkan import ini
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory; // 2. Panggil trait di dalam class

    protected $fillable = [
        'title', 'slug', 'content', 'image_path', 'is_published', 'published_at'
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
    ];
}
