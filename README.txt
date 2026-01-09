# Initial Installation and Error Fixing

1.  composer global require laravel/installer

2.  laravel new my-app [if this commands doesn't work add composer to the environment path]

    Error:
        Creating a "laravel/react-starter-kit" project at "./Leave-Management-Laravel-React"
        Installing laravel/react-starter-kit (dev-main ef94fc24fd1603ee5bfc963ef1000656de8d1e4b)
        - Installing laravel/react-starter-kit (dev-main ef94fc2): Extracting archive
        Created project in /home/saikat/Documents/Leave-Management-Laravel-React
        > @php -r "file_exists('.env') || copy('.env.example', '.env');"
        Loading composer repositories with package information
        Updating dependencies
        Your requirements could not be resolved to an installable set of packages.

        Problem 1
            - Root composer.json requires laravel/fortify ^1.30 -> satisfiable by laravel/fortify[v1.30.0, ..., v1.33.0].
            - bacon/bacon-qr-code[v3.0.0, ..., v3.0.3] require ext-iconv * -> it is missing from your system. Install or enable PHP's iconv extension.

            Alternatively you can require one of these packages that provide the extension (or parts of it):
            Keep in mind that the suggestions are automated and may not be valid or safe to use
            - symfony/polyfill-iconv Symfony polyfill for the Iconv extension

            - laravel/fortify[v1.30.0, ..., v1.33.0] require bacon/bacon-qr-code ^3.0 -> satisfiable by bacon/bacon-qr-code[v3.0.0, v3.0.1, v3.0.2, v3.0.3].

        To enable extensions, verify that they are enabled in your .ini files:
            - /etc/php/php.ini
        You can also run `php --ini` in a terminal to see which files are used by PHP in CLI mode.
        Alternatively, you can run Composer with `--ignore-platform-req=ext-iconv` to temporarily ignore these required extensions.

    Fix:
        1. Add below in composer.json:
            "require": {
            ...
            "laravel/wayfinder": "^0.1.9",
            "bacon/bacon-qr-code": "^3.0.3"
        2. uncomment the line ;extension=iconv in the PHP configuration file, typically located at /etc/php/php.ini, changing it to extension=
        3. cd my-app and run "composer install"

3.  cd my-app
    npm install && npm run build
    composer run dev

4.  Error: Illuminate\Encryption\MissingAppKeyException
    To resolve this issue, first ensure that the .env file exists in the project root. If it is missing, copy the .env.example file to .env using the command cp .env.example .env.
    Then, generate a new application key by running the Artisan command "php artisan key:generate".

5.  sudo mariadb -u root
    MariaDB [(none)]> CREATE DATABASE `leave-management`;
    MariaDB [(none)]> GRANT ALL PRIVILEGES ON `leave-management`.* TO 'phpmyadmin'@'localhost';

6.  update .env from mysql database something like below,
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=leave-management
    DB_USERNAME=phpmyadmin
    DB_PASSWORD=Password123

7.  run "php artisan migrate".
