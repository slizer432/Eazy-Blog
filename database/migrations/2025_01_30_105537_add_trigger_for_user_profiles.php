<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared('
            CREATE TRIGGER trg_SetRegisteredSince
            ON userProfiles
            AFTER INSERT
            AS
            BEGIN
                UPDATE userProfiles
                SET RegisteredSince = (SELECT created_at FROM users WHERE users.id = INSERTED.UserID)
                FROM INSERTED
                WHERE userProfiles.ProfileID = INSERTED.ProfileID;
            END;
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared('
            IF OBJECT_ID(\'trg_SetRegisteredSince\', \'TR\') IS NOT NULL
            DROP TRIGGER trg_SetRegisteredSince;
        ');
    }
};
