Note that /app and /dist are equivalent to /src and /build, respectively.
The /dist file should be the pure output of the build step, so deleting this folder should only delete the unmodified build, which should be possible to restore by reinitiating the build step.
