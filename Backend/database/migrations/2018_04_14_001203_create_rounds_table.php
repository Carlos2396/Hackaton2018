<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rounds', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->integer('mash_id')->unsigned();
            $table->foreign('mash_id')->references('id')->on('mashes')->onDelete('cascade');
        });

        Schema::create('round_user', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->integer('user_id')->unsigned();
            $table->integer('round_id')->unsigned();
            $table->integer('liked_snippet_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('round_id')->references('id')->on('rounds')->onDelete('cascade');
            $table->foreign('liked_snippet_id')->references('id')->on('snippets')->onDelete('cascade');
        });

        Schema::create('round_snippet', function (Blueprint $table) {
            $table->increments('id');
            $table->dateTime('start_time');
            $table->timestamps();

            $table->integer('round_id')->unsigned();
            $table->integer('snippet_id')->unsigned();
            $table->foreign('round_id')->references('id')->on('rounds')->onDelete('cascade');
            $table->foreign('snippet_id')->references('id')->on('snippets')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('round_user');
        Schema::dropIfExists('round_snippet');
        Schema::dropIfExists('rounds');
    }
}
