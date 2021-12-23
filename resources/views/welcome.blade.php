<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Bits Ranking</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app" class="bg-stone-900">
        <app />
    </div>
</body>


<!-- Awesome icons -->
<script src="https://kit.fontawesome.com/6e8149eba2.js" crossorigin="anonymous"></script>

<script src="{{ mix('js/app.js') }}"></script>

</html>