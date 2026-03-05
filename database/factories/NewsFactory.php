<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class NewsFactory extends Factory
{
    public function definition(): array
    {
        $title = fake()->sentence();
        return [
            'title' => $title,
            'slug' => Str::slug($title) . '-' . uniqid(),
            'content' => fake()->paragraphs(4, true),
            'image_path' => null,
            'is_published' => true, // Set true agar langsung tampil
            'published_at' => now()->subDays(rand(1, 30)),
        ];
    }
}
