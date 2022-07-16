package keeper

import (
	"cometa/x/devices/types"
)

var _ types.QueryServer = Keeper{}
