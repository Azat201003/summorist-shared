package config

import (
	"os"
	"github.com/joho/godotenv"
)

type config struct {
	UserServerHost string
	UserServerPort string
	MoreServerHost string
	MoreServerPort string
}

var Config config

func GenerateConfig(deployMode bool) error {
	var err error
	if (deployMode) {
		err = godotenv.Load("config-deploy.env")
	} else {
		err = godotenv.Load("config-develop.env")
	}
	if err != nil {
		return err
	}
	
	Config.UserServerHost = os.Getenv("USER_SERVER_HOST")
	Config.UserServerPort = os.Getenv("USER_SERVER_PORT")
	Config.MoreServerHost = os.Getenv("MORE_SERVER_HOST")
	Config.MoreServerPort = os.Getenv("MORE_SERVER_PORT")
	return nil
}

