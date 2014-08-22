<?php

class SetDesignModel extends Model {

	public function slug()
	{
		return $this->slug;
	}

	public function name()
	{
		return $this->name;
	}

	public function photographer()
	{
		return $this->photographer;
	}

	public function stylist()
	{
		return $this->stylist;
	}

	public function hair()
	{
		return $this->hair;
	}

	public function makeup()
	{
		return $this->makeup;
	}

	public function talent()
	{
		return $this->talent;
	}

}


/*
    $table->string('slug');

    $table->string('name');
    $table->string('height');
    $table->string('bust');
    $table->string('waist');
    $table->string('hips');
    $table->string('shoes');
    $table->string('hair');
    $table->string('eyes');
*/