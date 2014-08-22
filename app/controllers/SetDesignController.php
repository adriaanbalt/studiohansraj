<?php

class SetDesignController extends BaseController {

	public function index()
	{
		$data = SetDesignPhotosBoard::all();

		$this->layout->content = View::make('templates.site.listing')->withData($data);
	}

	public function details( $id )
	{
		$photos = SetDesign::where( 'slug', '=', $id )->firstOrFail()->photos;
		
		$name = Sculpture::where( 'slug', '=', $id )->firstOrFail()->name;
		$photographer = Sculpture::where( 'slug', '=', $id )->firstOrFail()->photographer;
		$talent = Sculpture::where( 'slug', '=', $id )->firstOrFail()->talent;
		$stylist = Sculpture::where( 'slug', '=', $id )->firstOrFail()->stylist;
		$hair = Sculpture::where( 'slug', '=', $id )->firstOrFail()->hair;
		$makeup = Sculpture::where( 'slug', '=', $id )->firstOrFail()->makeup;

		$this->layout->content = View::make('templates.site.details')->with( 'photos', $photos)->with('name', $name )->with('photographer', $photographer )->with('talent', $talent )->with('stylist', $stylist )->with('hair', $hair )->with('makeup', $makeup );
	}

}

