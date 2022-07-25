package keeper

import (
	"context"

	"cometa/x/devices/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) StoredDevicesAll(c context.Context, req *types.QueryAllStoredDevicesRequest) (*types.QueryAllStoredDevicesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storedDevicess []types.StoredDevices
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storedDevicesStore := prefix.NewStore(store, types.KeyPrefix(types.StoredDevicesKeyPrefix))

	pageRes, err := query.Paginate(storedDevicesStore, req.Pagination, func(key []byte, value []byte) error {
		var storedDevices types.StoredDevices
		if err := k.cdc.Unmarshal(value, &storedDevices); err != nil {
			return err
		}

		storedDevicess = append(storedDevicess, storedDevices)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoredDevicesResponse{StoredDevices: storedDevicess, Pagination: pageRes}, nil
}

func (k Keeper) StoredDevices(c context.Context, req *types.QueryGetStoredDevicesRequest) (*types.QueryGetStoredDevicesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetStoredDevices(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoredDevicesResponse{StoredDevices: val}, nil
}
