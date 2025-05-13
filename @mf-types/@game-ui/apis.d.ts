
    export type RemoteKeys = '@game-ui/keno';
    type PackageType<T> = T extends '@game-ui/keno' ? typeof import('@game-ui/keno') :any;