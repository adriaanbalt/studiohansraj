<footer>
	<img class='logo' src="{{ URL::asset( 'images/logo-black.svg' ) }}"/>
	<p class='address'>{{ $data->address }}</p>
	<p class='telephone'>
		<a href='tel:{{ $data->telephone }}'>{{ $data->telephone }}</a>
	</p>
	<p class='fax'>
		<a href='tel:{{ $data->telephone }}'>{{ $data->fax }}</a>
	</p>
	<p class='email'>
		<a href='mailto:{{ $data->email }}'>{{ $data->email }}</a>
	</p>
	<p>2014</p>
	<p class='balt'>website by <a href='http://balt.us' target='_blank'>BALT<!--<img src="{{ URL::asset( 'images/BALT.svg' ) }}"/>--></a></p>
</footer>