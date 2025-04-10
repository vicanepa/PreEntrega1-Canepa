import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductSkeleton = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="circular" width={230} height={230} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={60} />
            <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width={60}
                height={40}
            />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={60} />
            <Skeleton variant="rectangular" width={230} height={40} />
        </Stack>
    );
};

export default ProductSkeleton;