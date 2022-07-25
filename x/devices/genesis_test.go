package devices_test

import (
	"testing"

	keepertest "cometa/testutil/keeper"
	"cometa/testutil/nullify"
	"cometa/x/devices"
	"cometa/x/devices/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		StoredDevicesList: []types.StoredDevices{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		NextDevice: &types.NextDevice{
			IdValue: 69,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DevicesKeeper(t)
	devices.InitGenesis(ctx, *k, genesisState)
	got := devices.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.StoredDevicesList, got.StoredDevicesList)
	require.Equal(t, genesisState.NextDevice, got.NextDevice)
	// this line is used by starport scaffolding # genesis/test/assert
}
