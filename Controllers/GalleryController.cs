using AndreyRudenko.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO.Enumeration;

namespace AndreyRudenko.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GalleryController : ControllerBase
    {
        private IWebHostEnvironment environment;

        public GalleryController(IWebHostEnvironment environment)
        {
            this.environment = environment;
        }
        private string sourceDirectoryPortraits = @"galleries\portraits";
        private string sourceDirectoryFamily = @"galleries\family";
        private string sourceDirectoryEvents = @"galleries\events";

        [HttpGet]
        public IActionResult Get()
        {
            string correctPath = environment.WebRootPath;
            if (correctPath == null)
            {
                correctPath = Path.Combine(environment.ContentRootPath, @"ClientApp\public");
            }
            Galleries newGallery = new()
            {
                Portraits = ImageList(Path.Combine(correctPath, sourceDirectoryPortraits)).ToArray(),
                Family = ImageList(Path.Combine(correctPath, sourceDirectoryFamily)).ToArray(),
                Events = ImageList(Path.Combine(correctPath, sourceDirectoryEvents)).ToArray()
            };
            return Ok(newGallery);
        }
        private List<Image> ImageList(string sourceDirectory)
        {
            List<Image> sourceList = new List<Image>();
            string[] allFiles = Directory.GetFiles(sourceDirectory);
            int imageId = 1;
            foreach (var file in allFiles)
            {
                string fileName = Path.GetFileName(file);
                Image image = new()
                {
                    Id = imageId,
                    Name = fileName
                };
                sourceList.Add(image);
                imageId++;
            }
            return sourceList;
        }
    }
}
