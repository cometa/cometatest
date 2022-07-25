package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "cometa/testutil/keeper"
	"cometa/testutil/nullify"
	"cometa/x/devices/types"
)

func TestNextDeviceQuery(t *testing.T) {
	keeper, ctx := keepertest.DevicesKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestNextDevice(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetNextDeviceRequest
		response *types.QueryGetNextDeviceResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetNextDeviceRequest{},
			response: &types.QueryGetNextDeviceResponse{NextDevice: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.NextDevice(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
