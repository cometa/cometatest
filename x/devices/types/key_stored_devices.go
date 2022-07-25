package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoredDevicesKeyPrefix is the prefix to retrieve all StoredDevices
	StoredDevicesKeyPrefix = "StoredDevices/value/"
)

// StoredDevicesKey returns the store key to retrieve a StoredDevices from the index fields
func StoredDevicesKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
