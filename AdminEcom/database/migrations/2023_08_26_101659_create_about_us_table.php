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
        Schema::create('about_us', function (Blueprint $table) {
            $table->id();
            $table->text('about');
            $table->text('refund');
            $table->text('purchase_guide');
            $table->text('privacy');
            $table->text('address');
            $table->string('android_app');
            $table->string('desktop_app');
            $table->String('facebook_link');
            $table->string('twitter_link');
            $table->string('instagram_link');
            $table->text('copywright_text');
            $table->string('company_email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_us');
    }
};
