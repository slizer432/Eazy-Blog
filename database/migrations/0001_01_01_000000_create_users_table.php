<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Kolom 'id' dengan auto-increment
            $table->string('name', 100); // Kolom 'name' dengan panjang maksimal 100 karakter
            $table->string('email', 255)->unique(); // Kolom 'email' unik dengan panjang maksimal 255 karakter
            $table->string('password', 255); // Kolom 'password' dengan panjang maksimal 255 karakter
            $table->timestamps(); // Kolom 'created_at' dan 'updated_at' otomatis
        });

        Schema::create('userProfiles', function (Blueprint $table) {
            $table->id('ProfileID'); // Kolom 'ProfileID' dengan auto-increment (Primary Key)
            $table->bigInteger('UserID'); // Kolom 'UserID' sesuai dengan DDL yang Anda berikan
            $table->string('Bio', 255)->nullable(); // Kolom 'bio' dengan panjang maksimal 255 karakter
            $table->string('Gender', 10)->nullable(); // Kolom 'gender' dengan panjang maksimal 10 karakter
            $table->string('ProfilePicture', 255)->nullable(); // Kolom 'profile_picture' dengan panjang maksimal 255 karakter
            $table->string('InterestedTopics', 255)->nullable(); // Kolom 'interested_topics' dengan panjang maksimal 255 karakter
            $table->timestamp('RegisteredSince')->nullable(); // Kolom 'registered_since' untuk waktu registrasi, nullable
            $table->timestamps(); // Kolom 'created_at' dan 'updated_at' otomatis

            // Menambahkan foreign key yang mengacu ke kolom 'id' pada tabel 'users'
            $table->foreign('UserID', 'FK__UserProfi__UserI__531856C7') // Nama constraint yang jelas
                  ->references('id')->on('users')
                  ->onDelete('cascade');
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Menghapus foreign key constraint dari tabel 'user_profiles' terlebih dahulu
        Schema::table('userProfiles', function (Blueprint $table) {
            $table->dropForeign('FK__UserProfi__UserI__531856C7'); // Ganti dengan nama constraint yang sesuai
        });

        // Menghapus tabel-tabel terkait
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('userProfiles');
    }
};
