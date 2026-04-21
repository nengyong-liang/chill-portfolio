// 此文件根据 GitHub 数据自动生成
// 最后更新时间：2026/4/21 20:06:31
// 可以手动添加或修改项目

import { writable } from 'svelte/store';
import type { ProjectData } from '../types/projectType';

const initialProjects: ProjectData[] = [
  {
    id: 'EVAC_MIND',
    name: 'EVAC-MIND',
    icon: 'python',
    shortDescription: '暂无描述',
    githubUrl: 'https://github.com/nengyong-liang/EVAC-MIND',
    readmeUrl: 'https://raw.githubusercontent.com/nengyong-liang/EVAC-MIND/main/README.md',
    technologies: ['Python'],
    type: 'library'
  },
  {
    id: 'MultiMod_VisionDet',
    name: 'MultiMod-VisionDet',
    icon: 'python',
    shortDescription: '暂无描述',
    githubUrl: 'https://github.com/nengyong-liang/MultiMod-VisionDet',
    readmeUrl: 'https://raw.githubusercontent.com/nengyong-liang/MultiMod-VisionDet/main/README.md',
    technologies: ['Python'],
    type: 'library'
  },
  {
    id: 'MemoryHole',
    name: 'MemoryHole',
    icon: 'code',
    shortDescription: '暂无描述',
    githubUrl: 'https://github.com/nengyong-liang/MemoryHole',
    readmeUrl: 'https://raw.githubusercontent.com/nengyong-liang/MemoryHole/main/README.md',
    technologies: ['HTML'],
    type: 'library'
  },
  {
    id: 'NLP_course',
    name: 'NLP-course',
    icon: 'python',
    shortDescription: '暂无描述',
    githubUrl: 'https://github.com/nengyong-liang/NLP-course',
    readmeUrl: 'https://raw.githubusercontent.com/nengyong-liang/NLP-course/main/README.md',
    technologies: ['Python'],
    type: 'library'
  },
  {
    id: 'clip_reid_lny',
    name: 'clip-reid-lny',
    icon: 'python',
    shortDescription: '暂无描述',
    githubUrl: 'https://github.com/nengyong-liang/clip-reid-lny',
    readmeUrl: 'https://raw.githubusercontent.com/nengyong-liang/clip-reid-lny/main/README.md',
    technologies: ['Python'],
    type: 'library'
  },
  {
    id: 'Data_Mining_Practice',
    name: 'Data-Mining-Practice',
    icon: 'python',
    shortDescription: '暂无描述',
    githubUrl: 'https://github.com/nengyong-liang/Data-Mining-Practice',
    readmeUrl: 'https://raw.githubusercontent.com/nengyong-liang/Data-Mining-Practice/main/README.md',
    technologies: ['Python'],
    type: 'library'
  }
  // 可以手动添加更多项目
];

export const projects = writable<ProjectData[]>(initialProjects);
