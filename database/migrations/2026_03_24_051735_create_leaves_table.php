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
        Schema::create('leaves', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->dateTimeTz('date_from', precision: 0);
            $table->dateTimeTz('date_to', precision: 0);
            $table->smallInteger('approval_status');
            $table->foreignId('user_id')->constrained('users', 'id')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('approver_id')->constrained('users', 'id')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leaves');
    }
};
