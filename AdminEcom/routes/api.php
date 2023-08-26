<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\AboutUsController;



//Visitor Route
Route::get('/getvisitordetails', [VisitorController::class, 'getVisitorDetails']);

//Contact Route
Route::post('/postcontact', [ContactController::class, 'PostContactDetails']);


//Visitor Route
Route::get('/getallabout', [AboutUsController::class, 'getAboutUsDetails']);
