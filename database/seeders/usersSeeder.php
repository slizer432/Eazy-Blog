<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'tes',
                'email' => 'tes@gamil.com',
                'password' => Hash::make('pass5678'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}