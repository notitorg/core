package server

import (
	setting "notit/notit/core_setting"

	"github.com/gofiber/fiber/v2"
)

var app *fiber.App
var apiGroup fiber.Router

func Bootstrap() {
	app = fiber.New(fiber.Config{
		AppName:       setting.Get("api.name"),
		ServerHeader:  setting.Get("api.server_header"),
		StrictRouting: true,
		CaseSensitive: true,
	})

	app.Static("/public", "./public")
	apiGroup = app.Group("api")
}

func Start() {
	app.Listen(setting.Get("api.host") + ":" + setting.Get("api.port"))
}

func GetApiGroup() fiber.Router {
	return apiGroup
}
