package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "cometa/testutil/keeper"
	"cometa/testutil/nullify"
	"cometa/x/devices/keeper"
	"cometa/x/devices/types"
)

func createTestNextDevice(keeper *keeper.Keeper, ctx sdk.Context) types.NextDevice {
	item := types.NextDevice{}
	keeper.SetNextDevice(ctx, item)
	return item
}

func TestNextDeviceGet(t *testing.T) {
	keeper, ctx := keepertest.DevicesKeeper(t)
	item := createTestNextDevice(keeper, ctx)
	rst, found := keeper.GetNextDevice(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestNextDeviceRemove(t *testing.T) {
	keeper, ctx := keepertest.DevicesKeeper(t)
	createTestNextDevice(keeper, ctx)
	keeper.RemoveNextDevice(ctx)
	_, found := keeper.GetNextDevice(ctx)
	require.False(t, found)
}
