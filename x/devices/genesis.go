package devices

import (
	"cometa/x/devices/keeper"
	"cometa/x/devices/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the storedDevices
	for _, elem := range genState.StoredDevicesList {
		k.SetStoredDevices(ctx, elem)
	}
	// Set if defined
	if genState.NextDevice != nil {
		k.SetNextDevice(ctx, *genState.NextDevice)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.StoredDevicesList = k.GetAllStoredDevices(ctx)
	// Get all nextDevice
	nextDevice, found := k.GetNextDevice(ctx)
	if found {
		genesis.NextDevice = &nextDevice
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
