<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AboutUs;

class AboutUsController extends Controller
{
    public function getAboutUsDetails(){
        $result = AboutUs::get();
        return $result;
    }//End Method
}
