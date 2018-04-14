<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instrument extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'type'
    ];

    /**
     * Relations of User model
     */

    public function snippets(){
        return $this->hasMany('App\Snippet');
    }
}
