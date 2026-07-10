const imageModules = import.meta.glob(
  "../assets/catalogues/*/*.{jpg,jpeg,png}",
  {
    eager: true,
    import: "default",
  }
);

export function getBoothImages(
  boothId: string
): string[] {
  const folder =
    boothId.toLowerCase();

  return Object.entries(imageModules)
    .filter(([path]) =>
      path.includes(
        `/catalogues/${folder}/`
      )
    )
    .sort(([a], [b]) =>
      a.localeCompare(
        b,
        undefined,
        {
          numeric: true,
        }
      )
    )
    .map(
      ([, image]) =>
        image as string
    );
}