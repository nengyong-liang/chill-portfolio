import { nengyong } from "./devInfo";
import { syncProjectsToFileSystem } from "./syncProjects";

export const fileSystem: FileSystem = {
  home: {
    about: `
${nengyong.about}

Programming Languages:
${nengyong.code.join(", ")}

Operating Systems:
${nengyong.operatingSystems.join(", ")}

Tools Used:
${nengyong.toolsUsed.join(", ")}

IDEs:
${nengyong.ides.join(", ")}
    `,
    projects: {},
    interests: `
${nengyong.interests.join("\n")}
    `,
  },
};

syncProjectsToFileSystem(fileSystem);

export interface FileSystem {
  [key: string]: string | FileSystem;
}
