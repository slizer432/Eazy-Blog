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
        // Tabel Users
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

        // Tabel UserProfiles
        Schema::create('userProfiles', function (Blueprint $table) {
            $table->id('ProfileID'); // Kolom 'ProfileID' dengan auto-increment (Primary Key)
            $table->bigInteger('UserID')->unsigned(); // Kolom 'UserID' sebagai Foreign Key
            $table->string('Bio', 255)->nullable();
            $table->string('Gender', 10)->nullable();
            $table->string('ProfilePicture', 255)->nullable();
            $table->string('InterestedTopics', 255)->nullable();
            $table->timestamp('RegisteredSince')->nullable();
            $table->timestamps(); // Kolom 'created_at' dan 'updated_at' otomatis

            // Menambahkan foreign key yang mengacu ke kolom 'id' pada tabel 'users'
            $table->foreign('UserID')->references('id')->on('users')->onDelete('cascade');
        });

        // Tabel Categories
        Schema::create('categories', function (Blueprint $table) {
            $table->id('CategoryID'); // ID kategori
            $table->string('CategoryName', 100)->unique();
            $table->timestamps();
        });

        // Tabel Articles
        Schema::create('articles', function (Blueprint $table) {
            $table->id('ArticleID');
            $table->bigInteger('AuthorID')->unsigned();
            $table->string('Title', 255); // Menambahkan kolom Title
            $table->string('Description', 500)->nullable(); // Menambahkan kolom Description
            $table->text('Content'); // Menambahkan kolom Content
            $table->string('ImageURL', 255)->nullable(); // Menambahkan kolom ImageURL
            $table->bigInteger('CategoryID')->unsigned(); // Menambahkan kolom CategoryID
            $table->timestamp('PublishedAt')->useCurrent(); // Menambahkan kolom PublishedAt dengan default GETDATE()
        
            $table->timestamps();
        
            $table->foreign('AuthorID')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('CategoryID')->references('CategoryID')->on('categories')->onDelete('NO ACTION'); // Menggunakan NO ACTION untuk CategoryID
        });

        // Tabel Likes
        Schema::create('likes', function (Blueprint $table) {
            $table->id('LikeID');
            $table->bigInteger('UserID')->unsigned();
            $table->bigInteger('ArticleID')->unsigned(); // Menyesuaikan ArticleID menjadi NOT NULL
            $table->timestamp('LikedAt')->useCurrent(); // Menambahkan kolom LikedAt dengan default GETDATE()
        
            $table->timestamps();
        
            $table->foreign('UserID')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('ArticleID')->references('ArticleID')->on('articles')->onDelete('NO ACTION'); // Ubah menjadi NO ACTION
        });

        // Tabel Comments
        Schema::create('comments', function (Blueprint $table) {
            $table->id('CommentID'); // Kolom CommentID dengan auto-increment
            $table->bigInteger('UserID')->unsigned(); // Kolom UserID sebagai Foreign Key (sesuai dengan DDL, INT akan diganti BIGINT)
            $table->bigInteger('ArticleID')->unsigned(); // Kolom ArticleID sebagai Foreign Key
            $table->text('Content'); // Kolom Content dengan tipe text
            $table->timestamp('CommentedAt')->useCurrent(); // Kolom CommentedAt dengan default GETDATE()
            $table->timestamps(); // Kolom created_at dan updated_at otomatis
        
            // Menambahkan foreign key yang mengacu ke kolom 'id' pada tabel 'users'
            $table->foreign('UserID')->references('id')->on('users')->onDelete('cascade');
            // Menambahkan foreign key yang mengacu ke kolom 'ArticleID' pada tabel 'articles'
            $table->foreign('ArticleID')->references('ArticleID')->on('articles')->onDelete('NO ACTION'); // Menggunakan NO ACTION untuk menghindari masalah multiple cascade paths
        });

        // Tabel Password Reset Tokens
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        // Tabel Sessions
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
        // Menghapus tabel-tabel terkait
        // Menghapus foreign key sebelum menghapus tabel
        Schema::table('userProfiles', function (Blueprint $table) {
            $table->dropForeign('userprofiles_userid_foreign');
        });

        Schema::table('articles', function (Blueprint $table) {
            $table->dropForeign('articles_categoryid_foreign');
        });

        Schema::table('likes', function (Blueprint $table) {
            $table->dropForeign('likes_userid_foreign');
        });

        Schema::table('comments', function (Blueprint $table) {
            $table->dropForeign('comments_userid_foreign');
        });

        // Menghapus tabel
        Schema::dropIfExists('users');
        Schema::dropIfExists('userProfiles');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('articles');
        Schema::dropIfExists('likes');
        Schema::dropIfExists('comments');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('userProfiles');
    }
};
