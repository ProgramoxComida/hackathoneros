<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthenticationController extends Controller {
    /**
     * @SWG\Post(
     *      path="/api/login",
     *      operationId="Autenticación y Registro",
     *      tags={"Inicio de Sesión"},
     *      summary="Inicio de Sesión a Hackathoneros",
     *      description="Inicia sesión a la plataforma. No discrimina entre roles de usuarios.",
     *      @SWG\Parameter(
     *          name="email",
     *          description="Correo Electrónico",
     *          required=true,
     *          type="string",
     *          in="path"
     *      ),
     *      @SWG\Parameter(
     *          name="password",
     *          description="Contraseña",
     *          required=true,
     *          type="string",
     *          in="path"
     *      ),
     *      @SWG\Response(
     *          response=200,
     *          description="Operación satisfactoria. Entrega token JWT"
     *       ),
     *       @SWG\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     *
     * Regresa código 200 y JSON de prueba
     */
    public function login(Request $request) {

    }
}