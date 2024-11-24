package setting

import (
	"encoding/json"
	"log"
	"os"
)

var allKey map[string]string

func Get(key string) string {
	loadAllKeyIfNeeded()
	return allKey[key]
}

func loadAllKeyIfNeeded() {
	if len(allKey) > 0 {
		// Do nothing
	} else {
		loadAllKey()
	}
}

func loadAllKey() {
	content, err := os.ReadFile("./settings.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	err = json.Unmarshal(content, &allKey)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
	}
}
