export default new MessageEvent("*", {
  data: {
    image: {
      uri: "https://api.media.local.dev-gutools.co.uk/images/c1e59b35a6b63d566b712f12764c02188c556d86",
      data: {
        id: "c1e59b35a6b63d566b712f12764c02188c556d86",
        uploadTime: "2020-09-14T12:28:24.289Z",
        uploadedBy: "foo.bar@guardian.co.uk",
        lastModified: "2020-09-14T12:46:22.768Z",
        identifiers: {},
        uploadInfo: { filename: "30d70178150589.5c9c3b3a9a0a3.png" },
        source: {
          file:
            "http://grid-dev-core-imagebucket-4o97501shaoo.s3.amazonaws.com/c/1/e/5/9/b/c1e59b35a6b63d566b712f12764c02188c556d86",
          size: 4770880,
          mimeType: "image/png",
          dimensions: { width: 1920, height: 1428 },
          secureUrl:
            "https://localstack.media.local.dev-gutools.co.uk/grid-dev-core-imagebucket-4o97501shaoo/c/1/e/5/9/b/c1e59b35a6b63d566b712f12764c02188c556d86",
        },
        thumbnail: {
          file:
            "http://grid-dev-core-thumbbucket-tm12hrvlbbk3.s3.amazonaws.com/c/1/e/5/9/b/c1e59b35a6b63d566b712f12764c02188c556d86",
          size: 14141,
          mimeType: "image/jpeg",
          dimensions: { width: 256, height: 190 },
          secureUrl:
            "https://localstack.media.local.dev-gutools.co.uk/grid-dev-core-thumbbucket-tm12hrvlbbk3/c/1/e/5/9/b/c1e59b35a6b63d566b712f12764c02188c556d86",
        },
        optimisedPng: {
          file:
            "http://grid-dev-core-imagebucket-4o97501shaoo.s3.amazonaws.com/optimised/c/1/e/5/9/b/c1e59b35a6b63d566b712f12764c02188c556d86",
          size: 1194344,
          mimeType: "image/png",
          dimensions: { width: 1920, height: 1428 },
          secureUrl:
            "https://localstack.media.local.dev-gutools.co.uk/grid-dev-core-imagebucket-4o97501shaoo/optimised/c/1/e/5/9/b/c1e59b35a6b63d566b712f12764c02188c556d86",
        },
        fileMetadata: {},
        userMetadata: {},
        metadata: { description: "30d70178150589.5c9c3b3a9a0a3", credit: "asd" },
        originalMetadata: {},
        usageRights: { category: "screengrab", source: "asd" },
        originalUsageRights: {},
        exports: [
          {
            id: "0_0_1920_1428",
            author: "foo.bar@guardian.co.uk",
            date: "2020-09-14T13:29:21.781+01:00",
            specification: {
              uri: "https://api.media.local.dev-gutools.co.uk/images/c1e59b35a6b63d566b712f12764c02188c556d86",
              bounds: { x: 0, y: 0, width: 1920, height: 1428 },
              type: "full",
            },
            master: {
              file:
                "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/master/1920.jpg",
              size: 1239434,
              mimeType: "image/jpeg",
              dimensions: { width: 1920, height: 1428 },
            },
            assets: [
              {
                file:
                  "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/1000.jpg",
                size: 97319,
                mimeType: "image/jpeg",
                dimensions: { width: 1000, height: 744 },
              },
              {
                file:
                  "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/500.jpg",
                size: 31930,
                mimeType: "image/jpeg",
                dimensions: { width: 500, height: 372 },
              },
              {
                file:
                  "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/140.jpg",
                size: 6717,
                mimeType: "image/jpeg",
                dimensions: { width: 140, height: 104 },
              },
              {
                file:
                  "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/1920.jpg",
                size: 337476,
                mimeType: "image/jpeg",
                dimensions: { width: 1920, height: 1428 },
              },
            ],
          },
        ],
        usages: {},
        leases: {},
        collections: [{}],
        syndicationRights: null,
        usermetaDataLastModified: "2020-09-14T12:46:22.768Z",
        valid: true,
        invalidReasons: {},
        cost: "free",
        persisted: { value: true, reasons: ["exports", "leases", "photoshoot", "labeled", "edited"] },
        syndicationStatus: "unsuitable",
      },
    },
    crop: {
      data: {
        id: "0_0_1920_1428",
        author: "foo.bar@guardian.co.uk",
        date: "2020-09-14T12:29:21.781Z",
        specification: {
          uri: "https://api.media.local.dev-gutools.co.uk/images/c1e59b35a6b63d566b712f12764c02188c556d86",
          bounds: { x: 0, y: 0, width: 1920, height: 1428 },
          type: "full",
        },
        master: {
          file:
            "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/master/1920.jpg",
          size: 1239434,
          mimeType: "image/jpeg",
          dimensions: { width: 1920, height: 1428 },
        },
        assets: [
          {
            file:
              "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/140.jpg",
            size: 6717,
            mimeType: "image/jpeg",
            dimensions: { width: 140, height: 104 },
          },
          {
            file:
              "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/500.jpg",
            size: 31930,
            mimeType: "image/jpeg",
            dimensions: { width: 500, height: 372 },
          },
          {
            file:
              "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/1000.jpg",
            size: 97319,
            mimeType: "image/jpeg",
            dimensions: { width: 1000, height: 744 },
          },
          {
            file:
              "https://public.media.local.dev-gutools.co.uk/c1e59b35a6b63d566b712f12764c02188c556d86/0_0_1920_1428/1920.jpg",
            size: 337476,
            mimeType: "image/jpeg",
            dimensions: { width: 1920, height: 1428 },
          },
        ],
      },
    },
  },
});
