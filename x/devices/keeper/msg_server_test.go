package keeper_test

import (
	"context"
	"testing"

	keepertest "cometa/testutil/keeper"
	"cometa/x/devices/keeper"
	"cometa/x/devices/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.DevicesKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
