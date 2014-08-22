<footer>
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
</footer>