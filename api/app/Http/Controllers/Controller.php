<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

/**
 * @SWG\Swagger(
 *     schemes={"http","https"},
 *     host="localhost:8000",
 *     basePath="/",
 *     @SWG\Info(
 *         version="1.0.0",
 *         title="Hackathoneros API",
 *         description="Bienvenido a la API de Hackathoneros, con ella puedes obtener acceso a diferentes datos de la plataforma",
 *         termsOfService="",
 *         @SWG\Contact(
 *             email="marco.ramirez@rzerocorp.com"
 *         ),
 *         @SWG\License(
 *             name="MIT",
 *             url="URL to the license"
 *         )
 *     ),
 *     @SWG\ExternalDocumentation(
 *         description="Find out more about our website",
 *         url="https://programming4food.io"
 *     )
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
