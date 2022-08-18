using AndreyRudenko.Models;
using Microsoft.AspNetCore.Mvc;

namespace AndreyRudenko.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GalleryController : ControllerBase
    {
        private string sourceDirectoryPortraits = @"ClientApp\public\galleries\portraits";
        private string sourceDirectoryFamily = @"ClientApp\public\galleries\family";
        private string sourceDirectoryEvents = @"ClientApp\public\galleries\events";

        [HttpGet]
        public IActionResult Get()
        {
            Galleries newGallery = new()
            {
                Portraits = Ff(sourceDirectoryPortraits).ToArray(),
                Family = Ff(sourceDirectoryFamily).ToArray(),
                Events = Ff(sourceDirectoryEvents).ToArray()
            };
            return Ok(newGallery);
        }
        private List<Image> Ff(string sourceDirectory)
        {
            List<Image> sourceList = new List<Image>();
            string[] allFiles = Directory.GetFiles(sourceDirectory);
            int imageId = 1;
            foreach (string filePath in allFiles)
            {
                string fileName = Path.GetFileName(filePath);
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
