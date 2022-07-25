package keeper

import (
	"context"

	"cometa/x/devices/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NextDevice(c context.Context, req *types.QueryGetNextDeviceRequest) (*types.QueryGetNextDeviceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetNextDevice(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetNextDeviceResponse{NextDevice: val}, nil
}
