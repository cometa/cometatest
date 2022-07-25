package keeper

import (
	"cometa/x/devices/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetNextDevice set nextDevice in the store
func (k Keeper) SetNextDevice(ctx sdk.Context, nextDevice types.NextDevice) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextDeviceKey))
	b := k.cdc.MustMarshal(&nextDevice)
	store.Set([]byte{0}, b)
}

// GetNextDevice returns nextDevice
func (k Keeper) GetNextDevice(ctx sdk.Context) (val types.NextDevice, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextDeviceKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNextDevice removes nextDevice from the store
func (k Keeper) RemoveNextDevice(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextDeviceKey))
	store.Delete([]byte{0})
}
