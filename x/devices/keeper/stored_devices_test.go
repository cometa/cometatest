package keeper_test

import (
	"strconv"
	"testing"

	keepertest "cometa/testutil/keeper"
	"cometa/testutil/nullify"
	"cometa/x/devices/keeper"
	"cometa/x/devices/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNStoredDevices(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.StoredDevices {
	items := make([]types.StoredDevices, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetStoredDevices(ctx, items[i])
	}
	return items
}

func TestStoredDevicesGet(t *testing.T) {
	keeper, ctx := keepertest.DevicesKeeper(t)
	items := createNStoredDevices(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoredDevices(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoredDevicesRemove(t *testing.T) {
	keeper, ctx := keepertest.DevicesKeeper(t)
	items := createNStoredDevices(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoredDevices(ctx,
			item.Index,
		)
		_, found := keeper.GetStoredDevices(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestStoredDevicesGetAll(t *testing.T) {
	keeper, ctx := keepertest.DevicesKeeper(t)
	items := createNStoredDevices(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoredDevices(ctx)),
	)
}
