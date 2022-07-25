package keeper

import (
	"cometa/x/devices/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetStoredDevices set a specific storedDevices in the store from its index
func (k Keeper) SetStoredDevices(ctx sdk.Context, storedDevices types.StoredDevices) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredDevicesKeyPrefix))
	b := k.cdc.MustMarshal(&storedDevices)
	store.Set(types.StoredDevicesKey(
		storedDevices.Index,
	), b)
}

// GetStoredDevices returns a storedDevices from its index
func (k Keeper) GetStoredDevices(
	ctx sdk.Context,
	index string,

) (val types.StoredDevices, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredDevicesKeyPrefix))

	b := store.Get(types.StoredDevicesKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStoredDevices removes a storedDevices from the store
func (k Keeper) RemoveStoredDevices(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredDevicesKeyPrefix))
	store.Delete(types.StoredDevicesKey(
		index,
	))
}

// GetAllStoredDevices returns all storedDevices
func (k Keeper) GetAllStoredDevices(ctx sdk.Context) (list []types.StoredDevices) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredDevicesKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoredDevices
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
