<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMashesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mashes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->dateTime('start_datetime');
            $table->integer('quantum');
            $table->integer('bpm')->unsigned();
            $table->enum('key', ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si']);
            $table->enum('metre', ['3/4', '4/4', '6/8', '7/8', '5/4']);
            $table->timestamps();

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('mash_user', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();

            $table->integer('user_id')->unsigned();
            $table->integer('mash_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('mash_id')->references('id')->on('mashes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mash_user');
        Schema::dropIfExists('mashes');
    }
}
