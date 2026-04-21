// 个人开发者信息配置
// 请根据实际情况手动修改

export interface Developer {
  about: string;
  code: string[];
  interests: string[];
  operatingSystems: string[];
  toolsUsed: string[];
  ides: string[];
}

export const nengyong: Developer = {
  about: `I'm Ultraman Tiga`,
  code: [
    // 根据你的实际技术栈修改
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML",
    "CSS",
  ],
  interests: [
    "Web 开发",
    "开源项目",
    "技术探索",
  ],
  operatingSystems: ["Windows", "Linux"],
  toolsUsed: ["Git", "VS Code"],
  ides: ["VS Code", "Cursor"],
};
